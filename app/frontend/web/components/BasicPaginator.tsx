import React, { useState } from "react";

const BasicPaginator: React.ElementType = ({
  onPageChange,
  onPageSizeChange,
}: {
  onPageChange: (page: any) => void;
  onPageSizeChange: (pageSize: any) => void;
}) => {
  const [availablePages, setAvailablePages] = useState<number[]>([1]);

  const totalItems = 10; // FIXME: it should BE to communicate this!

  const availablePageSizes = [2, 4, 6, 8, 10];

  const handlePageSizeChange = (event: any) => {
    const value = event.target.value;
    onPageSizeChange(value);
    const maxPage = Math.ceil(totalItems / value);
    const ap = Array.from(new Array(maxPage), (x, i) => i + 1);
    setAvailablePages(ap);
    // should be selected always first page after page size change!
    onPageChange(1);
  };

  return (
    <div className="flex justify-around w-4/6">
      <div className="flex flex-col">
        Page
        <select
          onChange={(event) => onPageChange(event.target.value)}
        >
          {availablePages?.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        Page Size
        <select onChange={handlePageSizeChange} defaultValue={10}>
          {availablePageSizes.map((ps) => (
            <option key={ps} value={ps}>
              {ps}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BasicPaginator;
