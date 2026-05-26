from pathlib import Path

pg_hba = Path(r"C:\Program Files\PostgreSQL\18\data\pg_hba.conf")
pg_hba_bak = Path(r"C:\Program Files\PostgreSQL\18\data\pg_hba.conf.bak")
text = pg_hba.read_text(encoding='utf-8')
pg_hba_bak.write_text(text, encoding='utf-8')
text = text.replace(
    'local   all             all                                     scram-sha-256',
    'local   all             all                                     trust'
)
text = text.replace(
    'host    all             all             127.0.0.1/32            scram-sha-256',
    'host    all             all             127.0.0.1/32            trust'
)
text = text.replace(
    'host    all             all             ::1/128                 scram-sha-256',
    'host    all             all             ::1/128                 trust'
)
pg_hba.write_text(text, encoding='utf-8')
print('patched')
