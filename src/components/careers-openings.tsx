"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Globe2, MapPin, Search } from "lucide-react";
import { openRoles } from "@/lib/site-data";

export function CareersOpenings() {
  const [countryFilter, setCountryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");

  const countryOptions = [...new Set(openRoles.map((role) => role.country))];
  const locationOptions = [
    ...new Set(
      openRoles
        .filter((role) => (countryFilter ? role.country === countryFilter : true))
        .map((role) => role.location),
    ),
  ];

  const filteredRoles = openRoles.filter((role) => {
    const matchesCountry = countryFilter ? role.country === countryFilter : true;
    const matchesLocation = locationFilter ? role.location === locationFilter : true;
    const matchesTitle = titleFilter
      ? role.title.toLowerCase().includes(titleFilter.trim().toLowerCase())
      : true;

    return matchesCountry && matchesLocation && matchesTitle;
  });

  return (
    <div className="careers-board-shell">
      <div className="careers-filter-bar">
        <div className="careers-filter-field">
          <label htmlFor="career-title-filter">Title</label>
          <div className="careers-filter-input-wrap">
            <Search size={16} />
            <input
              id="career-title-filter"
              type="text"
              placeholder="Search by role title"
              value={titleFilter}
              onChange={(event) => setTitleFilter(event.target.value)}
            />
          </div>
        </div>

        <div className="careers-filter-field">
          <label htmlFor="career-country-filter">Country</label>
          <select
            id="career-country-filter"
            value={countryFilter}
            onChange={(event) => {
              setCountryFilter(event.target.value);
              setLocationFilter("");
            }}
          >
            <option value="">All countries</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="careers-filter-field">
          <label htmlFor="career-location-filter">Location</label>
          <select
            id="career-location-filter"
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
          >
            <option value="">All locations</option>
            {locationOptions.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="careers-results-meta">
        <span>{filteredRoles.length} open position{filteredRoles.length === 1 ? "" : "s"}</span>
      </div>

      <div className="careers-results-scroll" role="list" aria-label="Open positions">
        {filteredRoles.length ? (
          filteredRoles.map((role) => (
            <Link className="career-opening-card" href={`/careers/${role.slug}`} key={role.slug} prefetch>
              <div className="career-opening-topline">
                <div className="career-opening-title-wrap">
                  <span className="career-opening-icon" aria-hidden="true">
                    <BriefcaseBusiness size={18} />
                  </span>
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.summary}</p>
                  </div>
                </div>
                <span className="career-opening-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              </div>

              <div className="career-opening-meta">
                <span>
                  <Globe2 size={14} />
                  {role.country}
                </span>
                <span>
                  <MapPin size={14} />
                  {role.location}
                </span>
                <span>{role.type}</span>
                <span>{role.workModel}</span>
                <span>{role.department}</span>
                <span>{role.experience}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="career-opening-empty">
            <h3>No openings match the current filters</h3>
            <p>Adjust the title, country, or location filters to expand the list.</p>
          </div>
        )}
      </div>
    </div>
  );
}
