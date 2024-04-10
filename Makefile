# ターゲット: デフォルト
all: dev

# ターゲット: 開発環境
dev:
	# Next.jsアプリケーションを開発サーバーで起動
	npm run dev

# ターゲット: ビルド
build:
	# Next.jsアプリケーションを静的にビルド
	npm run build

# ターゲット: スタート
start:
	# ビルドされたアプリケーションをサーバーで起動
	npm run start

# ターゲット: テスト
test:
	# Next.jsアプリケーションのテストを実行
	npm run test

# ターゲット: クリーン
clean:
	# ビルドされたファイルやテスト結果を削除
	rm -rf .next/

# ターゲット: ヘルプ
help:
	@echo "Usage: make [target]"
	@echo "Available targets:"
	@echo "  all: デフォルトのターゲット。開発環境を起動します。"
	@echo "  dev: 開発環境を起動します。"
	@echo "  build: アプリケーションを静的にビルドします。"
	@echo "  start: ビルドされたアプリケーションをサーバーで起動します。"
	@echo "  test: アプリケーションのテストを実行します。"
	@echo "  clean: ビルドされたファイルやテスト結果を削除します。"
	@echo "  help: このヘルプを表示します。"
