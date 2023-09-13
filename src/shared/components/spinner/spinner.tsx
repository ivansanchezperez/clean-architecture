const Spinner = (): JSX.Element => {
	return (
		<div
			className="animate-spin inline-block w-10 h-10 border-[3px] border-solid border-t-transparent text-green-600 rounded-full"
			role="status"
			aria-label="loading"
		></div>
	);
};

export default Spinner;
