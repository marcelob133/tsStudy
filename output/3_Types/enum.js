"use strict";
var Permission;
(function (Permission) {
    Permission["ADMIN"] = "teste";
    Permission["USER"] = "teste1";
    Permission["READONLY"] = "teste2";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
//# sourceMappingURL=enum.js.map