import sqlite3
conn = sqlite3.connect('school.db')
cursor = conn.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cursor.fetchall()

if tables:
    print('Tables found:', [t[0] for t in tables])
    for table in tables:
        print(f'\n=== {table[0].upper()} ===')
        cursor.execute(f"SELECT * FROM {table[0]}")
        rows = cursor.fetchall()
        cursor.execute(f"PRAGMA table_info({table[0]})")
        columns = [col[1] for col in cursor.fetchall()]
        print(f"Columns: {', '.join(columns)}")
        print(f"Rows: {len(rows)}")
        for row in rows:
            print(f"  {row}")
else:
    print('No tables found - database may not be initialized')
conn.close()
