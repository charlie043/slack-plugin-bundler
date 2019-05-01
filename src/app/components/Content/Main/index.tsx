import Context, { IPlugin, PluginType } from "~context";
import Button from "~components/Button";
import DeleteButton from "~components/Button/DeleteButton";
import SaveButton from "~components/Button/SaveButton";
import { getPluginById } from "~utils/plugins";

const { $, React } = window;
const { useEffect, useContext, useState } = React;

const Main = () => {
  const context = useContext(Context);
  const [plugin, setPlugin] = useState<IPlugin | null>(null);

  useEffect(() => {
    const _plugin = getPluginById(context, context.state.selectedPluginId);
    setPlugin(_plugin);
  }, [context.state.selectedPluginId]);

  const updatePlugin = (kv: { [key in string]: string }) => {
    setPlugin(Object.assign({}, plugin, kv));
  };

  const outputStringifiedJSON = () => {
    console.log(JSON.stringify(plugin));
  };

  const fetchRaw = () => {
    const { url } = plugin!;
    $.get(url).then(data => {
      updatePlugin({ raw: data });
    });
  };

  const fetchJson = () => {
    const { url } = plugin!;
    $.get(url).then(data => {
      try {
        const plugin = JSON.parse(data);
        if (
          plugin.name &&
          (plugin.type === PluginType.Css ||
            plugin.type === PluginType.Javascript) &&
          plugin.raw
        ) {
          updatePlugin(plugin);
        } else {
          throw new Error("invalid json");
        }
      } catch (e) {
        alert("invalid json");
      }
    });
  };

  if (!plugin) {
    return (
      <div
        style={{
          flex: 1,
          padding: "20px"
        }}
      >
        No Plugins...
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        padding: "40px"
      }}
    >
      <div>
        <input
          style={{
            padding: "8px",
            fontSize: "12px",
            width: "70%",
            marginTop: "8px"
          }}
          placeholder="Fetch from url"
          value={plugin.url || ""}
          onChange={e => updatePlugin({ url: e.target.value })}
        />
        <Button label="fetch raw" onClick={fetchRaw} />
        <Button label="fetch json" onClick={fetchJson} />
      </div>
      <hr style={{ margin: "20px 0" }} />
      <div>
        <input
          style={{
            fontSize: "20px",
            padding: "8px",
            width: "80%"
          }}
          value={plugin.name || ""}
          onChange={e => updatePlugin({ name: e.target.value })}
          placeholder="name"
        />
      </div>
      <div>
        <select
          style={{
            width: "80%",
            fontSize: "12px",
            padding: "8px",
            marginTop: "8px"
          }}
          value={plugin.type}
          onChange={e => updatePlugin({ type: e.target.value })}
        >
          <option value={PluginType.Css}>css</option>
          <option value={PluginType.Javascript}>javascript</option>
        </select>
      </div>

      <div>
        <textarea
          style={{
            height: "300px",
            width: "80%",
            padding: "8px",
            marginTop: "8px"
          }}
          value={plugin.raw || ""}
          onChange={e => updatePlugin({ raw: e.target.value })}
          placeholder="raw"
        />
      </div>
      <div>
        <SaveButton plugin={plugin} />
        <DeleteButton />
      </div>
      <div>
        <Button
          label="Output JSON to console"
          onClick={outputStringifiedJSON}
        />
      </div>
    </div>
  );
};

export default Main;
