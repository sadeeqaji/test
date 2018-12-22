export function getFromStorage(isSigned){
	if(!isSigned){
		return null;
	}
	try {
		const valueStr = localStorage.getItem(isSigned);
		if (valueStr) {
			return JSON.parse(valueStr)
		}
		return null;
	} catch (err) {
		return null;
	}
}

export function setInStorage(isSigned, obj) {
	if(!isSigned){
		console.error("No user is signed from the server")
	}
	try {
		localStorage.setItem(isSigned, JSON.stringify(obj))
	} catch (err) {
		console.error(err)
	}
}