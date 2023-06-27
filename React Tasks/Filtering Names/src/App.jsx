import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  array,
  selectAllPersons,
  selectFilterName,
  selectPersonsWithColorName,
} from "./app/features/personsSlice";
import classNames from "classnames";
import { clearFilter, setFilterName } from "./app/features/filterSlice";
import "./App.scss";

export default function App() {
  const dispatch = useDispatch();
  const [currentButtonIndex, setCurrentButtonIndex] = useState(-1);
  const filteredPersons = useSelector(selectPersonsWithColorName);
  const filter = useSelector(selectFilterName);
  const setBtnIndex = (indx, color) => {
    setCurrentButtonIndex(indx);
    dispatch(setFilterName(color));
  };
  const persons = useSelector(selectAllPersons);

  const allColors = persons.map((color) => color.favoritColor);
  const colorsCount = allColors.reduce((count, color) => {
    count[color] = (count[color] || 0) + 1;
    return count;
  }, {});

  const colorsToArray = Object.entries(colorsCount).map(([color, count]) => ({
    color,
    count,
  }));

  return (
    <div className="App">
      <div className="grid">
        <div className="filters">
          <button
            onClick={() => {
              setBtnIndex(-1, "all");
              dispatch(clearFilter());
            }}
            className={classNames({
              active: currentButtonIndex === -1,
            })}
          >
            Select All <span>{persons.length}</span>
          </button>
          {Array.from(
            new Set(persons.map((person) => person.favoritColor))
          ).map((color, index) => {
            return (
              <button
                onClick={() => setBtnIndex(index, color)}
                key={index}
                className={classNames({
                  active: filter.includes(color),
                })}
              >
                <span>
                  {colorsToArray.map((col) => {
                    if (color === col.color) {
                      return `${col.color}: ${col.count}`;
                    }
                  })}
                </span>
              </button>
            );
          })}
        </div>
        <div className="persons">
          {array.length !== 0 ? (
            <div className="arr_flex">
              {array.flat().map((person) => {
                return (
                  <article
                    key={person.id}
                    style={{ backgroundColor: person.favoritColor }}
                    className={classNames({
                      blackText: person.favoritColor === "White",
                    })}
                  >
                    <h2>{person.name.charAt(0)}</h2>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="persons_flex">
              {filteredPersons.map((person) => {
                return (
                  <article
                    key={person.id}
                    style={{ backgroundColor: person.favoritColor }}
                    className={classNames({
                      blackText: person.favoritColor === "White",
                    })}
                  >
                    <h2>{person.name.charAt(0)}</h2>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
