import { Input, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
    const filterValue = useSelector(getFilterValue)
    const dispatch = useDispatch();
    
  return (
    <div>
        <Label>Find contacts by name</Label>

        <Input
              type="text"
              value={filterValue}
              name="filter"
              onChange={(e) => dispatch(setFilter(e.target.value))}
        />
    </div>
        );
};

