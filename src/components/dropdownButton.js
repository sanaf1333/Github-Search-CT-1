import { Select } from "antd";

const DropdownButton = () => {
    return ( 
        <Select
                        defaultValue="users"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'users',
                            label: 'users',
                            },
                            {
                            value: 'repositories',
                            label: 'repositories',
                            },
                            {
                            value: 'issues',
                            label: 'issues',
                            },
                        ]}
                        />
     );
}
 
export default DropdownButton;