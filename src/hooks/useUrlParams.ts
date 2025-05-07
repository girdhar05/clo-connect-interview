import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/product/productSlice';
import { applyFilters } from '../utils/filter';
import { Data } from '../interface/data';

export function useUrlParams(tempProducts: Data[]) {
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterValues, setFilterValues] = useState<string[]>([]);
  
  // Initialize from URL on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    // Get initial keyword
    if (params.has('keyword')) {
      setSearchKeyword(params.get('keyword') || '');
    }
    
    // Get initial filters
    if (params.has('filter')) {
      const filterParam = params.get('filter') || '';
      setFilterValues(filterParam ? filterParam.split(',') : []);
    }
    
    // Apply initial filters
    if (tempProducts && tempProducts.length > 0) {
      dispatch(setProducts(applyFilters(tempProducts)));
    }
  }, [tempProducts]);
  
  // Update URL and apply filters
  const updateParams = (newKeyword?: string, newFilters?: string[]) => {
    const params = new URLSearchParams(window.location.search);
    
    // Update keyword parameter
    if (newKeyword !== undefined) {
      if (newKeyword) {
        params.set('keyword', newKeyword);
      } else {
        params.delete('keyword');
      }
      setSearchKeyword(newKeyword);
    }
    
    // Update filter parameter
    if (newFilters !== undefined) {
      if (newFilters.length > 0) {
        params.set('filter', newFilters.join(','));
      } else {
        params.delete('filter');
      }
      setFilterValues(newFilters);
    }
    
    // Update URL
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    
    // Apply filters and update Redux store
    if (tempProducts) {
      dispatch(setProducts(applyFilters(tempProducts)));
    }
  };
  
  return {
    searchKeyword,
    filterValues,
    updateParams
  };
}