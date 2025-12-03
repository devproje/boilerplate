CC = bun
OUTDIR = ./dist
TARGET = ../public

.PHONY: all build copyto clean

all: build copyto

build:
	@$(CC) run build

copyto:
	@echo "Copying static frontend dist..."
	@cp -r $(OUTDIR) $(TARGET)

clean:
	@rm -rf $(OUTDIR)

