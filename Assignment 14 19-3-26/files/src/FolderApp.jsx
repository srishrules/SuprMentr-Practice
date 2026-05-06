import { useState } from "react";
import "./Folder.css";

function FolderItem({ item, addItem, path }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginLeft: "20px" }}>

            {/* FILE */}
            {item.type === "file" && (
                <div className="file">📄 {item.name}</div>
            )}

            {/* FOLDER */}
            {item.type === "folder" && (
                <>
                    <div className="folder">
                        <span onClick={() => setOpen(!open)}>
                            📁 {item.name}
                        </span>

                        <button onClick={() => addItem(path, "file")}>
                            + File
                        </button>
                        <button onClick={() => addItem(path, "folder")}>
                            + Folder
                        </button>
                    </div>

                    {open &&
                        item.children.map((child, index) => (
                            <FolderItem
                                key={index}
                                item={child}
                                addItem={addItem}
                                path={[...path, index]}   // 👈 IMPORTANT
                            />
                        ))}
                </>
            )}
        </div>
    );
}

function FolderApp() {
    const [data, setData] = useState([
        {
            name: "root",
            type: "folder",
            children: []
        }
    ]);

    const addItem = (path, type) => {
        const name = prompt(`Enter ${type} name`);
        if (!name) return;

        const newItem =
            type === "folder"
                ? { name, type, children: [] }
                : { name, type };

        const newData = [...data];

        let current = newData[0];

        // 👇 Traverse using path
        for (let i = 0; i < path.length; i++) {
            current = current.children[path[i]];
        }

        current.children.push(newItem);

        setData(newData);
    };

    return (
        <div className="app">
            <h2>📁 Folder Architect</h2>

            <FolderItem
                item={data[0]}
                addItem={addItem}
                path={[]}   // 👈 root path
            />
        </div>
    );
}

export default FolderApp;