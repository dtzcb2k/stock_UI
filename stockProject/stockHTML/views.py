from django.shortcuts import render
from datetime import datetime

def stock_detail(request, stock_code):
    # 模擬股票數據（可以用真實數據替換）
    stock_data = {
        "stock_name": "味全",
        "stock_code": stock_code,
        "current_price": 18.05,
        "price_change": -0.15,
        "price_change_percent": -0.82,
        "last_update": datetime.now().strftime('%Y/%m/%d '),
        "previous_close": 18.20,
        "opening_price": 18.10,
        "high_price": 18.15,
        "low_price": 18.00,
        "current_volume": 644,
        "previous_volume": 509,
    }
    return render(request, 'stockHTML/stock_detail.html', stock_data)
