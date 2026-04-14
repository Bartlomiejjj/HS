import { useState } from "react";
import "../../styles/events.css";

export type event_props = {
  date: string;
  name: string;
  description: string;
  img: string;
  tags?: string[];
};

export type events = {
  e: event_props[];
  selected_date?: string;
};

type FilterMode = "day" | "month" | "year";

export const events_list: events = {
  e: [
    {
      date: "2026-01-02",
      description: "description was longer",
      name: "NAME",
      img: "img source link",
      tags: ["music", "live"],
    },
    {
      date: "2026-01-02",
      description: "description was longer",
      name: "NAME2",
      img: "img source link",
      tags: ["festival"],
    },
    {
      date: "2026-03-02",
      description: "description was longer",
      name: "NAME4",
      img: "img source link",
      tags: ["sport"],
    },
    {
      date: "2026-04-14",
      description: "description was longer",
      name: "NAME5",
      img: "img source link",
      tags: ["tech", "conference"],
    },
  ],
};

export const Event = ({ date, description, name, tags }: event_props) => {
  const [showTags, setShowTags] = useState(false);

  return (
    <section className="event" onClick={() => setShowTags(!showTags)}>
      <h1>{name}</h1>
      <h2>{date}</h2>
      <p>{description}</p>

      {showTags && tags && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export const EventHandler = ({
  e,
  selected_date,
  filterMode,
}: events & { filterMode: FilterMode }) => {
  const [year, month] = selected_date!.split("-");

  const filtered = e.filter((item) => {
    const [y, m] = item.date.split("-");

    if (filterMode === "day") return item.date === selected_date;
    if (filterMode === "month") return y === year && m === month;
    if (filterMode === "year") return y === year;

    return false;
  });

  return (
    <main className="events">
      {filtered.length > 0 ? (
        filtered.map((item, index) => <Event key={index} {...item} />)
      ) : (
        <p>Brak wydarzeń</p>
      )}
    </main>
  );
};

export const EventPage = () => {
  function getTodaysDate() {
    return new Date().toISOString().slice(0, 10);
  }

  function getTodaysYear() {
    const today = new Date();
    return `${today.getFullYear()}-01-01`;
  }

  function nextMonth() {
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() + 1);
    setSelectedDate(date.toISOString().slice(0, 10));
  }

  function prevMonth() {
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() - 1);
    setSelectedDate(date.toISOString().slice(0, 10));
  }

  const [selectedDate, setSelectedDate] = useState(getTodaysDate());
  const [filterMode, setFilterMode] = useState<FilterMode>("year");

  return (
    <>
      <aside className="event-asidebar">
        <button onClick={prevMonth}>{"<"}</button>

        <input
          type="date"
          value={selectedDate}
          min={getTodaysYear()}
          onChange={(e) => setSelectedDate(e.currentTarget.value)}
        />

        <button onClick={nextMonth}>{">"}</button>
      </aside>

      <div className="filter-buttons">
        <button
          className={filterMode === "day" ? "active" : ""}
          onClick={() => setFilterMode("day")}
        >
          Dzień
        </button>

        <button
          className={filterMode === "month" ? "active" : ""}
          onClick={() => setFilterMode("month")}
        >
          Miesiąc
        </button>

        <button
          className={filterMode === "year" ? "active" : ""}
          onClick={() => setFilterMode("year")}
        >
          Wszystkie w tym roku
        </button>
      </div>
      <section>
        <b>#</b>
        {filterMode == "day"
          ? "Wszystkie wydarzenia w tym dniu"
          : filterMode == "month"
          ? "Wszystkie wydarzenia w tym miesiącu"
          : filterMode == "year"
          ? "Wszystkie wydarzenia w tym miesiącu"
          : ""}
      </section>
      <EventHandler
        e={events_list.e}
        selected_date={selectedDate}
        filterMode={filterMode}
      />
    </>
  );
};
