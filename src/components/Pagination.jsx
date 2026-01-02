import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        className={`border border-primary text-lg text-primary rounded-sm w-10 h-10 cursor-pointer disabled:border-gray-600 disabled:text-gray-600`}
        onClick={() => [
          setPage((prev) => prev - 1),
          (location.href = "#projects"),
        ]}
        disabled={page === 1}
      >
        {"<"}
      </button>
      {new Array(totalPages).fill(0).map((_, i) => {
        return (
          <button
            className={`${
              page === i + 1
                ? "text-tertiary bg-primary"
                : "text-primary bg-transparent"
            } border border-primary text-lg rounded-sm w-10 h-10 cursor-pointer`}
            onClick={() => [setPage(i + 1), (location.href = "#projects")]}
          >
            {i + 1}
          </button>
        );
      })}
      <button
        className={`border border-primary text-lg text-primary rounded-sm w-10 h-10 cursor-pointer disabled:border-gray-600 disabled:text-gray-600`}
        onClick={() => [
          setPage((prev) => prev + 1),
          (location.href = "#projects"),
        ]}
        disabled={page === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
