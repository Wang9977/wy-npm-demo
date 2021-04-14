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
