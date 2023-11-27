# Run chmod 777 setup.sh before running this makefile

.PHONY: setup-init local-psql

setup-init:
	./setup.sh

local-psql:
	echo "Accessing psql..."
	docker-compose exec -i -t -u postgres db psql -U pguser referral_db

