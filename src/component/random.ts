
function random(min: number, max: number, integer: boolean): number {
	if (min === max) return min;

	if (min > max) {
		[min, max] = [max, min];
	}

	if (integer) {
		max++;
		return Math.floor(Math.random() * (max - min) + min);
	}
	else {
		return Math.random() * (max - min) + min;
	}
}

export function random_generate(): void {
	let ans: string = "Example";
	try {
		const min_html = <HTMLInputElement>document.getElementById("min_number");
		const max_html = <HTMLInputElement>document.getElementById("max_number");
		const integer_html = <HTMLInputElement>document.getElementById("integer_checkbox");

		ans = String(random(Number(min_html.value), Number(max_html.value), integer_html.checked));
	} catch (e: unknown) {
		ans = "Something is wrong.";
	}

	const result_html = document.getElementById("result");
	result_html!.textContent = ans;
}

export function reset(): void {
	const min_html = <HTMLInputElement>document.getElementById("min_number");
	const max_html = <HTMLInputElement>document.getElementById("max_number");
	const integer_html = <HTMLInputElement>document.getElementById("integer_checkbox");

	min_html.value = "";
	max_html.value = "";
	integer_html.checked = true;
}

export function copy(): void {
	const result_html = document.getElementById("result");
	navigator.clipboard.writeText(String(result_html?.textContent)).then(() => {
		alert("Copied!");
	}, () => {
		alert("Copy failed");
	});
}
