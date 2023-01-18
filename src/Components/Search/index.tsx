import { TextField, InputAdornment } from "@mui/material";
import { SearchIcon } from '../../Components/SearchIcon';

interface HandlerProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ onChangeHandler }: HandlerProps) => {
  return (
    <TextField
      sx={{
        width: {
          xs: '100%',
          sm: '55%',
          md: '600px'
        },
        background: '#FFFFFF',
        border: '1px solid #EAEAEA',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
        mb: '40px'
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder="Search..."
      onChange={onChangeHandler}
    />
  );
}
