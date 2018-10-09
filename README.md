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


## 必要そうな権限


Cloud Functions Developer

```
cloudfunctions.functions.call
cloudfunctions.functions.create
cloudfunctions.functions.delete
cloudfunctions.functions.get
cloudfunctions.functions.list
cloudfunctions.functions.sourceCodeGet
cloudfunctions.functions.sourceCodeSet
cloudfunctions.functions.update
cloudfunctions.locations.list
cloudfunctions.operations.get
cloudfunctions.operations.list
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
```

Cloud Build Service Account

```
cloudbuild.builds.create
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.builds.update
logging.logEntries.create
pubsub.topics.create
pubsub.topics.publish
resourcemanager.projects.get
resourcemanager.projects.list
source.repos.get
source.repos.list
storage.buckets.create
storage.buckets.get
storage.buckets.list
storage.objects.create
storage.objects.delete
storage.objects.get
storage.objects.list
storage.objects.update
```

Cloud Function Service Agent

```
$ gcloud iam roles describe roles/cloudfunctions.serviceAgent
description: Gives Cloud Functions service account access to managed resources.
etag: AA==
includedPermissions:
- clientauthconfig.clients.list
- iam.serviceAccounts.actAs
- iam.serviceAccounts.getAccessToken
- iam.serviceAccounts.signBlob
- pubsub.subscriptions.consume
- pubsub.subscriptions.create
- pubsub.subscriptions.delete
- pubsub.subscriptions.get
- pubsub.subscriptions.getIamPolicy
- pubsub.subscriptions.list
- pubsub.subscriptions.setIamPolicy
- pubsub.subscriptions.update
- pubsub.topics.attachSubscription
- pubsub.topics.create
- pubsub.topics.get
- resourcemanager.projects.get
- resourcemanager.projects.getIamPolicy
- serviceusage.quotas.get
- serviceusage.services.disable
- serviceusage.services.enable
- storage.buckets.get
- storage.buckets.update
```

## 動作確認
- tag v1.0 vanillaのjsをdeployする
  - https://github.com/selmertsx/cloud_source_repository_test/tree/v1.0
- tag v1.1 webpackを利用する
  - https://github.com/selmertsx/cloud_source_repository_test/tree/v1.1

```
$ npm run build
$ gcloud functions deploy subscribe --stage-bucket=selmertsx-sample-bucket --trigger-http --runtime=nodejs8
```

```
$ gcloud functions call subscribe
executionId: 10moh42xg44u
result: Hello World!
```

- tag v1.2 webpackを使って外部のpackageを読み込ませてみた
  - https://github.com/selmertsx/cloud_source_repository_test/tree/v1.2

## localで動かす

```
npx functions start
npx functions deploy subscribe --stage-bucket=selmertsx-sample-bucket --trigger-http
```

## メモ

`roles/cloudfunctions.serviceAgent` さんが、↓のコマンドでは出現しないのに

```
$ gcloud iam roles list | grep Functions
title: Cloud Functions Developer
title: Cloud Functions Viewer
```

