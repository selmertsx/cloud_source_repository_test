# このリポジトリの目的

Cloud Source RepositoryとCloud Buildの素振りのため、下記の項目をチェックする

- Source RepositoryとGitHubのミラーリングを試す
- GitHubでmasterにpushされたら、Cloud Buildが実行されるようにする
- 上記Cloud Buildの中で、cloud functionsへのデプロイをする


## Source RepositoryとGitHubのミラーリング

https://cloud.google.com/source-repositories/docs/connecting-hosted-repositories

このドキュメントどおりにやればできる

## GitHubでmasterにpushされたら、Cloud Buildが実行されるようにする

## deploy

```
npx webpack --mode production
gcloud beta functions deploy subscribe --stage-bucket ${BUCKET_NAME} --trigger-topic cloud-builds
```

## 便利コマンド

### cloud buildの実行

```
gcloud builds submit --config=cloudbuild.yaml
```

※ 疑問
ここで言うsourceってなんなんだろ？
shallow cloneしているGitHubリポジトリのことなんだろうか？

### logs

```
# 閲覧可能なlog一覧を出力する
gcloud logging logs list

# 実行するcloud functionsのlog一覧を出力する
gcloud logging read "logName=projects/${PROJECT_ID}/logs/cloudfunctions.googleapis.com%2Fcloud-functions" --limit=10
```

https://cloud.google.com/logging/docs/view/overview

logをfilterするための情報はここにある。
