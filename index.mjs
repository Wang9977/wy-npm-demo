import moment from 'moment'
export function formatDateTime (value, type) {
	type = (type === undefined ? 'YYYY-MM-DD' : type)
	return moment(value).format(type)
  }


export function npmDemo(argument) {
	var name = 'finit';
	var f1 =function f(arg){console.log(arg)}
	return {
		name:name,
		f1:f1
	}
}
// module.exports=npmDemo();
console.log(formatDateTime(new Date()))
export const unique = (arr) => {
	// eslint-disable-next-line no-prototype-builtins
	if (Array.hasOwnProperty('from')) {
	  return Array.from(new Set(arr))
	} else {
	  var n = {}; var r = []
	  for (var i = 0; i < arr.length; i++) {
		if (!n[arr[i]]) {
		  n[arr[i]] = true
		  r.push(arr[i])
		}
	  }
	  return r
	}
  }


  export const map = (arr, fn, thisObj) => {
	var scope = thisObj || window
	var a = []
	for (var i = 0, j = arr.length; i < j; ++i) {
	  var res = fn.call(scope, arr[i], i, this)
	  if (res != null) a.push(res)
	}
	return a
  }

  export const intersect = (a, b) => {
	var _this = this
	a = this.unique(a)
	return this.map(a, function (o) {
	  return _this.contains(b, o) ? o : null
	})
  }
