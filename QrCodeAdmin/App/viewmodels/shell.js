define(['durandal/system', 'durandal/plugins/router', 'services/logger', 'services/datacontext'],
    function (system, router, logger, datacontext) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return datacontext.init().then(boot);
        }

        function boot() {
            router.mapNav('home');
            router.mapRoute('details/:id', 'viewmodels/details', 'details', false);
            router.mapNav('campaigns');
            log('Hot Towel SPA Loaded!', null, true);
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });