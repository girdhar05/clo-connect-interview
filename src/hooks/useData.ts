import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearProducts, setError, setLoading, setProducts, setTempProducts } from "../store/product/productSlice";

export default function useData() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://closet-recruiting-api.azurewebsites.net/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        result.sort((a: any, b: any) => a.title.localeCompare(b.title));
        dispatch(setProducts(result))
        dispatch(setTempProducts(result))
      } catch (error: Error | any) {
        setError(error.message);
        dispatch(clearProducts())
      } finally {
        dispatch(setLoading(false))
      }
    };

    fetchData();
  }, []);
}