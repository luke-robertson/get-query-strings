const allQueryStrings = () =>
	location.search ? location.search
		.substr(1)
		.split('&')
		.reduce((acc, item) => {
			const arr = item.split('=')
			acc[arr[0]] = decodeURIComponent(arr[1])
			return acc
		}, {}) : {}

const queryString = name => allQueryStrings()[name]

export default { queryString, allQueryStrings }
