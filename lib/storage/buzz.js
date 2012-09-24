var buzz = (function() {
	var byBuzzType = [];
	var byBuzzId = {};

	return {
		add: function(buzzType, buzzId, someString, someString2) {
			var d = {
				buzzType: buzzType,
				buzzId: buzzId,
				someString: someString,
				someString2: someString2
			};
			if (buzzId in byBuzzId) { 
				byBuzzId[buzzId].push(d);
			} else {
				byBuzzId[buzzId] = [];
				byBuzzId[buzzId].push(d);
			}
			byBuzzType[buzzId-1] = d;
		},
		getByBuzzID: function(buzzId) {
			if (buzzId in byBuzzId) {
				return byBuzzId[buzzId];
			}
			return null;
		},
		getByBuzzType: function(buzzType) {
			return byBuzzType[buzzType-1];
		}
	};
})();

exports.buzz = buzz;