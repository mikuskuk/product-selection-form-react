# Product Selection Form (React/TypeScript)

This is a simple product selection form implemented in React using TypeScript. The form allows users to select a product, choose variations, and view a composite product code based on their selections.

## Components

### CompositeCodeDisplay

Props:
- compositeCode: The composite product code to display.
- generateCompositeCode: A function to generate the composite product code (not implemented in the provided code).

This component displays the composite product code based on the user's selections.

### ProductSelection

Props:
- products: An array of available products.
- selectedProduct: The currently selected product.
- handleProductChange: A function to handle changes in the selected product.

This component renders a dropdown to select a product from the list of available products.

### VariationDropdown

Props:
- variety: The variety of the product (e.g., color, size).
- varietyData: Information about the variety, including options.
- handleVarietyChange: A function to handle changes in the selected variety and option.

This component renders a dropdown to select options for a specific product variety.

## App Component

The main App component is responsible for managing the state and rendering the form.

State:
- products: An array of available products.
- selectedProduct: The currently selected product.
- selectedVarieties: An array of selected product varieties and options.
- compositeCode: The composite product code generated based on selections.

The App component handles changes to the selected product and product varieties. It calculates the composite product code based on the selected options.

## Styling

The app uses basic CSS for styling. It centers the form on the page, provides styling for labels and dropdowns, and displays the composite code in a styled box.

## Usage

1. Users can select a product from the dropdown list.
2. For each variety of the selected product (e.g., color, size), users can choose options.
3. The composite product code is automatically generated and displayed based on the selections.

## Prerequisites

Ensure that you have Node.js and npm (Node Package Manager) installed on your system.

## Installation

1. Clone the repository: `git clone git@github.com:mikuskuk/product-selection-form-react.git`
2. Navigate to the project folder: `cd product-selection-form-react`
3. Install dependencies: `npm install`

## Running the App

After installing the dependencies, you can run the app using the following command:

```npm start```

This will start the development server, and you can access the app in your web browser at `http://localhost:3000`.

## Data Source

The product data is loaded from a JSON file (`productData.json`) and includes information about available products, their varieties, and options. You can modify this data source to fit your specific use case.