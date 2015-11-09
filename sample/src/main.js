import 'github:twbs/bootstrap@3.3.5';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', () => ['autocomplete', 'button', 'tabstrip']);


    aurelia.use.globalResources('shared/collapse-panel');
 	aurelia.use.globalResources('shared/markdown');

    aurelia.start().then(a => a.setRoot('app'));
}
