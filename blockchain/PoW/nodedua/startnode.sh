geth --networkid 1337 --datadir "." --nodiscover --http --http.port "8545" --http.addr "192.168.1.8" --port "30303" --http.corsdomain "*" --nat "any" --http.api eth,web3,personal,net,admin --unlock 0x01a5f82f9c3d1bafe6cf1903aa44fb8dcc1eeb86 --password ./password.sec --ipcpath "~/.ethereum/geth.ipc" --allow-insecure-unlock --nousb
