import { useCallback, useEffect, useMemo, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filterString, setFilterString] = useState(null);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [page, setPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await API.fetchMovies();

      setMovies(response);
    } catch (error) {
      showError(true);
    }
  }, []);

  useEffect(() => {
    fetchMovies();

    const savedSearch = localStorage.getItem("search");
    const savedIsShort = localStorage.getItem("isShort");
    // const savedFilteredMovies = localStorage.getItem('movies');

    if (savedSearch) {
      setSearch(savedSearch);
      setFilterString(savedSearch);
    }

    if (savedIsShort) {
      setIsShort(savedIsShort === "true");
    }

    // if (savedFilteredMovies) {
    //   setFilteredMovies(JSON.parse(savedFilteredMovies))
    // }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = useCallback(async () => {
    // валидация пустого инпута
    // показать ошибку и return
    // setFilteredMovies(
    //   movies.filter((movie) => {
    //     return movie.nameRu.includes(search);
    //   })
    // );
    // setFilterString(search)
  }, [search, movies]);

  const filteredMovies = useMemo(() => {
    if (!filterString) {
      return [];
    }

    const filtered = movies.filter((movie) => {
      const nameRu = movie.nameRu.toLowerCase();
      const nameEn = movies.nameEN.toLowerCase();
      const str = filterString.toLowerCase();

      if (isShort && movie.duration > 40) {
        return false;
      }
      return nameRu.includes(str) || nameEn.includes(str);
    });

    localStorage.setItem("search", filterString);
    localStorage.setItem("isShort", String(isShort));
    // localStorage.setItem('movies', JSON.stringify(filtered));

    return filtered;
  }, [filterString, movies, isShort]);

  const moviesToRender = useMemo(() => {
    const countToRender = screenWidth < 768 ? 5 : screenWidth < 1280 ? 8 : 12;

    return filteredMovies.slice(0, countToRender * page);
  }, [filteredMovies, page, screenWidth]);

  const handleMoreClick = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return (
    <div>
      <input type="text" />
      <button onClick={handleSubmit}>Submit</button>

      {filteredMovies > moviesToRender && (
        <button onClick={handleMoreClick}>Еще</button>
      )}
    </div>
  );
};

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = useCallback((event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
    setIsValid(target.closest("form").checkValidity());
  }, []);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

const LoginForm = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  return (
    <div>
      <input
        name="name"
        onChange={handleChange}
        value={values["name"]}
        required
        pattern="sgsdfgg"
        minLength={5}
      />
      {errors["name"] && <span>{errors["name"]}</span>}
      <input
        type="password"
        onChange={handleChange}
        value={values["password"]}
      />
      <button disabled={!isValid}>Submit</button>
    </div>
  );
};

// const errors = [
//   {
//     field: 'email',
//     message: 'Email already exists',
//   },
//   {
//     field: 'password',
//     message: 'Too weak',
//   }
// ]
