
 /* eslint-disable */ //turn off no useless escape
 function isValidIsraeliID (idVal) {
        var id = String(idVal).trim();
        if (id.length > 9 || id.length < 5 || isNaN(id)) return false;
        // Pad string with zeros up to 9 digits
          id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    
          return Array
                .from(id, Number)
                  .reduce((counter, digit, i) => {
                    const step = digit * ((i % 2) + 1);
                            return counter + (step > 9 ? step - 9 : step);
                        }) % 10 === 0;
}

function isPhoneValid(phone) {
        const phoneRegexExp = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/;
        return phoneRegexExp.test(phone);
    }

    function isIpValid (ip) {
        const ipRegexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
        return ipRegexExp.test(ip);
    }

  

  export {isValidIsraeliID, isPhoneValid, isIpValid};