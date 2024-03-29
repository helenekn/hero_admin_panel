import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { activeFilterChanged, fetchFilters, selectAll } from "./filtersSlice";
import Spinner from "../spinner/Spinner";
import store from "../../store";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active

const HeroesFilters = () => {
  const { filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state.filters
  );
  const filters = selectAll(store.getState());
  const dispatch = useDispatch();
  const { request } = useHttp();

  // Запрос на сервер для получения фильтров и последовательной смены состояния
  useEffect(() => {
    dispatch(fetchFilters());
    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Loading error</h5>;
  }

  const renderFilters = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">No filters found</h5>;
    }

    // Данные в json-файле я расширила классами и текстом
    return arr.map(({ name, className, label }) => {
      // Используем библиотеку classnames и формируем классы динамически
      const btnClass = classNames("btn", className, {
        active: name === activeFilter,
      });

      return (
        <button
          key={name}
          id={name}
          className={btnClass}
          onClick={() => dispatch(activeFilterChanged(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter heroes by element</p>
        <div className="btn-group">{elements}</div>
      </div>
    </div>
  );
};

export default HeroesFilters;
