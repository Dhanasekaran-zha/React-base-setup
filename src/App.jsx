import {AppRouter} from "./router/index.jsx";
import {Loader} from "@/components/atoms/index.js";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";

function App() {

    const queries = useSelector((state) => state.APIQueries.queries);
    const isLoading = Object.values(queries || {}).some(
        (query) => query?.status === "pending"
    );

    return (
        <div>
            {isLoading && <Loader/>}
            <ToastContainer className={'font-outfit'} autoClose={3000}/>
            <AppRouter/>
        </div>
    )
}

export default App
