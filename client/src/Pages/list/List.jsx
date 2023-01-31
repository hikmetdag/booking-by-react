import React, { useState } from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loading from "../../components/loading/Loading";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );
  const handleClick = () => {
    reFetch();
  };

  if (error) return <Error />;
  if (loading) return <Loading />;
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                type="text"
                onChange={(e) => setDestination(e.currentTarget.value)}
                placeholder={destination}
              />
            </div>
            <div className="lsItem">
              <label>Check In</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>Per night</small>
                </span>
                <input
                  onChange={(e) => setMin(e.target.value)}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>Per night</small>
                </span>
                <input
                  onChange={(e) => setMax(e.target.value)}
                  type="number"
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  onChange={(e) => setOptions(e.currentTarget.value)}
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  onChange={(e) => setOptions(e.currentTarget.value)}
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  onChange={(e) => setOptions(e.currentTarget.value)}
                  placeholder={options.room}
                />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
