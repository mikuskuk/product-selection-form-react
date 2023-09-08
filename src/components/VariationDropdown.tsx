import React, { useState } from "react";

interface VarietyOption {
    code: string;
    description: string;
}

interface VariationDropdownProps {
    variety: string;
    varietyData: {
        code: string;
        description: string;
        options: VarietyOption[];
    };
    handleVarietyChange: (varietyCode: string, optionCode: string) => void;
}

const VariationDropdown: React.FC<VariationDropdownProps> = ({
    variety,
    varietyData,
    handleVarietyChange,
}) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const optionCode = event.target.value;
        setSelectedOption(optionCode);
        handleVarietyChange(varietyData.code, optionCode);
    }
    return (
        <div>
            <label htmlFor={varietyData.code}>{varietyData.description}</label>
            <select id={varietyData.code} onChange={onOptionChange} value={selectedOption}>
                <option value="" disabled>
                    Select {varietyData.description}
                </option>
                {varietyData.options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.description}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VariationDropdown;