export const writeToClipboard = (val: string) => {
	return navigator.clipboard.writeText(val)
}