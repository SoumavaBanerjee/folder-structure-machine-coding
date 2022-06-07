import { useState } from "react";

const Folder = ({ explorer }) => {
  const { name, items, isFolder } = explorer;
  const [openFolder, setOpenFolder] = useState(false);

  if (isFolder) {
    return (
      <div>
        <span onClick={() => setOpenFolder(!openFolder)}>{name}</span>

        {openFolder && (
          <div>
            {items.map((item) => {
              return (
                <div style={{ paddingLeft: "0.5rem" }} key={item.name}>
                  <Folder explorer={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <span>{name}</span>
      <br />
    </>
  );
};

export default Folder;
