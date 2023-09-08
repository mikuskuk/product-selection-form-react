import React from "react";

interface CompositeCodeDisplayProps {
    compositeCode: string;
    generateCompositeCode: () => void;
}

const CompositeCodeDisplay: React.FC<CompositeCodeDisplayProps> = ({
    compositeCode,
}) => {
    return (
        <div>
            <label>Product Code:</label>
            <span>{compositeCode}</span>
        </div>
    );
};

export default CompositeCodeDisplay;