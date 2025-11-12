# Data Analysis Dashboard

A modern, responsive data analysis dashboard built with HTML, Tailwind CSS, and JavaScript.

## Features

- 📊 **Real-time Data Visualization**: Line charts, bar charts, and pie charts
- 📈 **Statistical Analysis**: Total records, average, maximum, and minimum values
- 📋 **Data Table**: View recent data entries in a clean table format
- 💡 **Analysis Summary**: Automated insights and trend analysis
- 🔄 **Auto-refresh**: Manual refresh button to reload data
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast Loading**: Optimized for performance

## Setup

1. **Open the HTML file** in a web browser, or
2. **Use a local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Configure Backend API**:
   - Open `app.js`
   - Update the `API_ENDPOINT` constant with your backend URL:
   ```javascript
   const API_ENDPOINT = 'http://localhost:3000/api/data';
   ```

## Backend Data Format

Your backend API should return data in one of these formats:

### Format 1: Array of Objects
```json
[
  {
    "id": 1,
    "name": "Item 1",
    "value": 100,
    "category": "Category A"
  },
  {
    "id": 2,
    "name": "Item 2",
    "value": 200,
    "category": "Category B"
  }
]
```

### Format 2: Object with Records
```json
{
  "records": [
    {
      "id": 1,
      "name": "Item 1",
      "value": 100,
      "category": "Category A"
    }
  ],
  "total": 1
}
```

### Format 3: Object with Data Property
```json
{
  "data": [
    {
      "id": 1,
      "name": "Item 1",
      "value": 100,
      "category": "Category A"
    }
  ]
}
```

## Field Mapping

The dashboard automatically detects these field names:
- **ID**: `id`, `_id`
- **Name**: `name`, `title`
- **Value**: `value`, `amount`, `count`, `score`
- **Category**: `category`, `type`

## Demo Mode

If the backend is not available, the dashboard will automatically load sample data for demonstration purposes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5**: Structure
- **Tailwind CSS**: Styling (via CDN)
- **JavaScript (ES6+)**: Logic and data handling
- **Chart.js**: Data visualization

## Customization

You can customize:
- Colors: Modify Tailwind classes in `index.html`
- Charts: Update Chart.js configurations in `app.js`
- API endpoint: Change `API_ENDPOINT` in `app.js`
- Layout: Adjust grid layouts in `index.html`

