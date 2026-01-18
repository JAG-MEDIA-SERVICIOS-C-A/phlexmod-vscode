const vscode = require('vscode');

function activate(context) {
  const config = vscode.workspace.getConfiguration('phlexmod');
  const telemetryEnabled = config.get('enableTelemetry', false);

  const globalState = context.globalState;
  const activationCountKey = 'phlexmod.activationCount';
  const lastReviewVersionKey = 'phlexmod.lastReviewVersion';
  const extensionVersion = getExtensionVersion();

  let activationCount = globalState.get(activationCountKey, 0);
  activationCount += 1;
  if (telemetryEnabled) {
    globalState.update(activationCountKey, activationCount);
  }

  const disposableReviewCommand = vscode.commands.registerCommand('phlexmod.openReviewPage', () => {
    const url = vscode.Uri.parse('https://open-vsx.org/extension/jag-media/phlexmod-vscode');
    vscode.env.openExternal(url);
  });
  context.subscriptions.push(disposableReviewCommand);

  if (telemetryEnabled) {
    const lastReviewVersion = globalState.get(lastReviewVersionKey, '');
    if (shouldPromptForReview(activationCount, extensionVersion, lastReviewVersion)) {
      vscode.window
        .showInformationMessage(
          '¿Te ha resultado útil la extensión PHLEXMOD MIA Assistant?',
          'Valorar extensión',
          'Más tarde'
        )
        .then(selection => {
          if (selection === 'Valorar extensión') {
            vscode.commands.executeCommand('phlexmod.openReviewPage');
            globalState.update(lastReviewVersionKey, extensionVersion);
          }
        });
    }
  }
}

function getExtensionVersion() {
  const extension = vscode.extensions.getExtension('jag-media.phlexmod-vscode');
  if (!extension || !extension.packageJSON || !extension.packageJSON.version) {
    return '';
  }
  return String(extension.packageJSON.version);
}

function shouldPromptForReview(activationCount, currentVersion, lastReviewVersion) {
  if (!currentVersion) {
    return false;
  }
  if (currentVersion === lastReviewVersion) {
    return false;
  }
  if (activationCount < 10) {
    return false;
  }
  return true;
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

