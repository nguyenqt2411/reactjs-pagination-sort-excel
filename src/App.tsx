import DataTable from "./components/DataTable";
import { data } from "./data";

const App = () => {
	return (
		<div className="w-full md:px-24 px-5 py-8">
			<DataTable
				data={data}
				searchBar
				excelExport
				pageSizeControl
				pagination
				removableRows
			/>
		</div>
	);
};

export default App;
