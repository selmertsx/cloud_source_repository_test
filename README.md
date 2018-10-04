# このリポジトリの目的

Cloud Source RepositoryとCloud Buildの素振りのため、下記の項目をチェックする

- Source RepositoryとGitHubのミラーリングを試す
- GitHubでmasterにpushされたら、Cloud Buildが実行されるようにする
- 上記Cloud Buildの中で、cloud functionsへのデプロイをする


## Source RepositoryとGitHubのミラーリング

https://cloud.google.com/source-repositories/docs/connecting-hosted-repositories

このドキュメントどおりにやればできる

## GitHubでmasterにpushされたら、Cloud Buildが実行されるようにする


## 便利コマンド
### cloud functionsのdeploy

```
gcloud beta functions deploy subscribe --stage-bucket ${BUCKET_NAME} --trigger-topic cloud-builds
```

### cloud buildの実行

```
gcloud builds submit --config=cloudbuild.yaml
```

※ 疑問
ここで言うsourceってなんなんだろ？
shallow cloneしているGitHubリポジトリのことなんだろうか？

