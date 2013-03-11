define([],
    function () {
        var localstore = {
            getCustomerId: getCustomerId,
            setCustomerId: setCustomerId
        };

        return localstore;
        
        function getCustomerId() {
            return localStorage.getItem('qrcode.customerId');
        }
        
        function setCustomerId(customerId) {
            return localStorage.setItem('qrcode.customerId', customerId);
        }
        
    });