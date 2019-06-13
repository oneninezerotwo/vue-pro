<template>
    <section class="g-section">
        <h2 class="section-header">小雨伞服务</h2>
        <div class="service row g-space">
            <a href="https://www.xiaoyusan.com/pay/actPay?id=1004&amp;chn=discovery_new" class="service-item" data-track="discovery_consultant_new">
                <i class="icon icon-1v1"></i>
                <div class="text">
                    <h3>1v1专属顾问
                        <span class="title-icon icon-hot"></span>
                    </h3>
                    <p>量身定制专属方案</p>
                </div>
            </a>
            <a href="https://www.xiaoyusan.com/pay/consult?id=1009&amp;chn=discovery_new#/deposit" class="service-item" data-track="discovery_policyDeposit_new">
                <i class="icon icon-trust"></i>
                <div class="text">
                    <h3>保单托管服务</h3>
                    <p>专业顾问在线管理</p>
                </div>
            </a>
        </div>
        <div class="service row g-space">
            <a href="/hebao?chn=discovery_new" class="service-item" data-track="discovery_hebao_new">
                <i class="icon icon-hebao"></i>
                <div class="text">
                    <h3>疾病核保服务</h3>
                    <p>身体有异常也能投保</p>
                </div>
            </a>
            <a href="/claims/guidev2#/index?chn=discovery_new" class="service-item" data-track="discovery_claim_new">
                <i class="icon icon-soso"></i>
                <div class="text">
                    <h3>极速闪赔服务</h3>
                    <p>最快50分钟赔付到账</p>
                </div>
            </a>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
* {
    -webkit-tap-highlight-color: transparent;
    outline: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #666;
}
.g-section {
    margin: 0 1.4rem;
}
.g-section>h2 {
    padding-top: 2.2rem;
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1;
}
.service:not(:last-child) {
    border: none;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.service:not(:last-child) .service-item {
    margin: 1.6rem 0 0;
}
.service .service-item:not(:last-child) {
    border-right: 1px solid #f5f5f5;
}
.service .service-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 2.2rem 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

a {
    text-decoration: none;
    color: inherit;
}
.service .service-item:first-child .icon {
    margin-left: 0;
}
.service .service-item .icon {
    width: 3.2rem;
    height: 4rem;
    margin-left: 1.5rem;
    margin-right: .75rem;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
.icon-1v1 {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExODBFM0ZEN0RDRTExRTlCRDZGRkU1MzcxQUQzQ0NBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExODBFM0ZFN0RDRTExRTlCRDZGRkU1MzcxQUQzQ0NBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTE4MEUzRkI3RENFMTFFOUJENkZGRTUzNzFBRDNDQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTE4MEUzRkM3RENFMTFFOUJENkZGRTUzNzFBRDNDQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4p2jNZAAAGW0lEQVR42uxa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");
}
em, i {
    font-style: normal;
    font-size: inherit;
}
.service .service-item .text h3 {
    padding-bottom: .6rem;
    font-size: 1.49rem;
    color: #333;
    font-weight: 400;
    line-height: 1;
}
.service .service-item .text h3 .title-icon {
    display: inline-block;
    width: 2.4rem;
    height: 1.2rem;
    margin-left: .5rem;
    background-position: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.icon-hot {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAaCAYAAAD1wA/qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMDJFNDREODczRjExRTk4NThFQTY3MTNFQjg2M0JEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwMDJFNDRFODczRjExRTk4NThFQTY3MTNFQjg2M0JEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDAwMkU0NEI4NzNGMTFFOTg1OEVBNjcxM0VCODYzQkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDAwMkU0NEM4NzNGMTFFOTg1OEVBNjcxM0VCODYzQkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zLl26AAADi0lEQVR42tRYS0xTQRQ9UCzyaEkFQfkUCjVFq/UHhvgJAYEQgxo1IiYoJrgwJsbEsDFx4c5EjYnBz0ajCcYFGt240AUiRuIPjEIAabVYbVoEilYKDyjWOm/6Wvq0XwNSbnoyM2/uvHdP78y9MxPlPHMFLnHSH5xOvun8u+700gmGX+H2BXqv2y5/dSAG/mUBQREPDUEy/+x/CkswSKAleELwlGDKl6I/IsUExwnkmFthCBQ8ygmMBJcImv9UjPbR5gicjwASvoSz6RxvY3QgIscIahD5UsPb6pNISUAS2XIGq1RSSONFEUSm5E8i3CKuCzisvDADeytUyEpnZtW8lcvCeX+dOwC5iZQSpMzp/5uZKsaFUxpUbs8IYxRnc5k3kaI5nyhLk2MhlYj/YWSRd/hVhz1cQ9aLk0+kHb02v3oJEhGUmYwnuX4wsPg+4pjBv2CFN5Gk0CP7QhFO1K7AItn0XK4osaPxgZ4a6S37KtJQsC5V8Mxud6C1zYx7jwZpe8NqKWqrVJ7+9KVSXD+bR+vXbuvw/K0tiEWLvadW6C4tK1RgcsqBplYD2jv7YSd1SbwYVTuUAr2Du+WUBNff0T2Ih80GvCOlWCzC1s1yHNiVRvXGxhwwfbXB8o31EDX12yhsbCieWxBsi+JbxthJXL2l8+yD9AYbqnaqKJm0FDFMA3ZarlG7gsfNRh16+1hefxjre6w4VKnCxrxUtLy0oEfPorteRz1zeL8KQ4TQ6Ys6wV4vBIkOm0jPh2FBu1M77frkxFhabsqn7obBaIX2k3C6vemyYfi761nBGtlMLZTwiZgHxoNvJNIktByw+NbV9f2gZdzCmLkjEnkyNXtEhnhPyBLEfnJG3Ax+zTJ7RLq0VlrmKpOQvkRIZnkOg+xM19poeWWZga+9/7eoFYq8e28jC94KhVyGI9W5ePbajKFhOxYnilG6xXU8eNs1CGO/3TNmlA+1XB45Wi3H+IQDN+6aQ/hay+wR4aThvgE1exSUzLZihaCPI3G90SiMhh9Z9H22IidLhrzVrtAdnAiXVJu4ShR/Zm8PemZXZDA0qxtMLEZGHYIztSZXSgfrv0z3uc/lKgWDtWoZfff4xE+0dVjxhXjC37lcrWQgYUS0/YJk9cBn9pOkHiaRyLt8aCD1ereN8zX83iG4HMrlQ6SKkSfwONRblEiRn/yC7uWvg5qCXQflz/f0/luAAQCY0Of5ua1KzgAAAABJRU5ErkJggg==");
}
.service .service-item .text p {
    font-size: 1.2rem;
    color: #999;
}
.icon-trust {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5QThEODRFN0RDRTExRTk5OUM5ODM1NDRCOEFGRUE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5QThEODRGN0RDRTExRTk5OUM5ODM1NDRCOEFGRUE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODlBOEQ4NEM3RENFMTFFOTk5Qzk4MzU0NEI4QUZFQTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODlBOEQ4NEQ3RENFMTFFOTk5Qzk4MzU0NEI4QUZFQTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mtouCAAADwklEQVR42uxbS2gUQRDtmTWJ+Rg2KGhM/KHiB6OgoqAoeBDxF8WTh0gM/hA9Cv7wKnoUiV8wBoKgaDwIih704kkSBRH8EowYUDSwSLJZk2zGV0wpE9lZeyfdpic7BY9ml9qi63V1dXd1r+U4jjBFWq78kFUtAcq4LQBi/H0aGACSQA+3WWWcCJfEgYlAYRZ/CMWs1w90A4mwE0CjXMWO5SJEVCUT18XRMUzsEDhPYT4rgPNeKWYbJWEjoBSY7pnjI5EY2yoNCwEUvtWApdCmxTYLw0DAVE39s9m20QTERzjnZXJCPPAq0NQoFqCp5cSiMETLuXXKAwyOY1lOl20PPrbtVIeEPi2TCSvXjRCcX4TmsOK5qUqQ6Jwi2x64FYulPkjodwaZAtsNdZ53glZyaKhgjaR+WRACqs3fOlhx2VwQhADLfAKE7LwuVLUVPgH0jZKzlNFPB80Zqgjokzl5mSi2yG9J5zsB/flOQF++E9CTzwRQtSipi4B5QBuvx0GQAs4rqgP4SbfOVaAFWDaC3xfxeWO3pv4RwQmdBCxXZGeVhr4NCbc+qHUf8EaRnZcatshdPP+1ElDvZTmgtAIXFY/8Z+HeF/wRXWXxZ8AMEbym1wt8Uzznh428bgL4bC46DVjqxsTFSBDplDmgjeWNkNTpVGcExIS6ur7DCSwt+4O6/eViNAlYwVm8SqFNSmI7OMEaXw9oVuy8YHvNYSmIzA+LXV0EtIXFri4C6oB2xTbb2a5S0ZUE3yo8EGmVfK8IRQREBEQERAREBEQERAREBEQEqJbxwGRJ+wWSW3LSofd9JSafBcjhDcBG4d7ufAeuAh99HN8JrBZuxecpcBMYzKA7B9gLVAj3wfND4L7IoUL0PwigEW8Q7tvB3zIJOAJcA557vp8AHARm82cqm60V7svuS2J47Z6qS/WevhJxW4AlbDdhwhRYB5z6y3nvSB/gyCCZAhzzOO+VucBxJoJI2Qzs8RmoacBJYL0JEVAroUP1vJnCrepkm8cUNUeB98Biif5vMrEe4CdLJfWKJZw3ehWgV2NfJHXTOSQzKo33Sug5OiOAOpHttehr4DqTsA+oyaKb5KRncZ7INjVecNKjJXbXPyLkk84IuOvD8E/gBnCOMzN9vgA88bFDS+RZ4ZbP6Dr9DPDVR/cRcFm4d33017JG4ZbIUxl06Ra4VdYZK8jf5poaxUI0Wznr07r9CrjNTmWSlbw3qORRp9G8kyGcKQK2ca6gv8XRZcgD4V9greDkWsOrDT2Tv9dwSLyT9eWXAAMAxyjB1Sof5p8AAAAASUVORK5CYII=");
}
.icon-hebao {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1QjNGRTkxN0RDRTExRTk5OTdDQzVFMkJDMkU1QUZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1QjNGRTkyN0RDRTExRTk5OTdDQzVFMkJDMkU1QUZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTVCM0ZFOEY3RENFMTFFOTk5N0NDNUUyQkMyRTVBRkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTVCM0ZFOTA3RENFMTFFOTk5N0NDNUUyQkMyRTVBRkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DQ+agAAAE70lEQVR42uxbXWwUVRS+d6dd2qU0VaS1lPJj0WBEkppo1KDERBATjBESjBEM+FBMTEwU4ckXTYwPRl9MHyRGfEBCeLDBxBfCTyKYAi8i9qEP/DTVBgQhFLbtdrs7w3d2z8ZxmFnmzs6dzrSc5MvM3r29e883956/O5WWZYk4yL49t/x2zQBNfK0HDG4vAlPAOJDl6z2lTiRHWoD5QLqKLoRG7pcHrgM3k04APeUOVkxFiKh2Jm6EV8ddkoq58rTMlwVQ3i6NPEYmaQTMBRbb9ngtYvBYc0PfAnt7lRR6BljJk2nmdrJ+w/g4gOsZYKy+/hYt30WADJFQyWNeYvsQmQ2g31gPrAPmuHzfzKQQ3gAOW1ZqUEpTx+qkMRcCQ1ERQPvvA+ARn/2JoI3FYuaGYUzsk7I4qWlOLRXvEDYBpMBzwDz+vEJB+YoULEu2FQqZTVJa57ESMKY1mUpNnsV9PqR5ztdBAC2vXUCnz/5TvC+dc0BkJimIaQURAA1rNVmW0V1XN7YH92FEbmn2CuNhErDch/Kk9BHgNHClrGzJVz8LvOz9QOQE1G43zfQSrIShkObbFDYBGR99DgK/OtouA30ctb3t8XdmaWlYsiFkWxBpHPAPuzkvOcN9opJ0zTYAMUAHu5VmDledMlTx7cDvQDWrngM+B7ptMcNSu22AHXgUHgIW3BqDh7iWSuWv1BgcBSMAinfh8paPPX8VOKowNBF0iu87bQSQYRwFAV2wBV3ledelYRNGpSwcNYzcYC2WW1X5p3DZ6dPaP1TDE6q23wvkKeAhGkyzfjNWxUsBxi8qrwAoT/7zXYX4fCGTFUQ6/Ckhs6ZpvAib9i+Cpz8Vxs8H2QKvcHqq8hQf02zMyEPATRqrcVUhYCIIAU+6tF3kBGMBsEqzsueAa8DDwBO2OGEKtqFVcaxsEAIecLHcX3OA0x4BAT9x3EDyBfDgf0ZSKXPMV0pmqkbQ+SNjtkoLTewXnkzYYvHYlx1tQeW6rmzwZ+A4Z1thCiUut0MaKydsdUId6fDtECerw2COJKUkpmMbjdirQVFVhOL05LNu5aqZLjm3Jz8bCJgxByMqe3xCKB6NxdEIUrT5BytEqfRynyHKKKffV/0qH8cVQMnTYQ51SZ4G9nNt4J6ypadZfzqsUShx6rMpL2wkaJM4EfCtx5MemA0EfAS849JOeUZPEgmgmsGHwAFgt3A/EqvIWuBLj+/eA/p1EqDLCH4D7OD7N4ENwGvAqKMfWfiDHg+Cxvhe99LTtQK2OT6/IMrnAW22tnmcPbpljsd4W4ikEpBzaaNiyW9AF//uj8DjLv2ourRZlAqfySXgM492Uv4k8B1vCeFSYHndXrBIKgFUJvvY4zvy89s9vtsq1AqbsXaDX7Gips/+n3IgJGYKASQ/ABs5SakmfUyAmGkEkBwS5VdkvN6EHOAgyEoiAXN89iMXuIYzNbvcYKOXna4QtFYCVM7rzwLPsyskoQPNV0X5YGXapNZIUPU1tgvA6jjl37WugJxIuNwnQMxyuU9AxEYwTJHTQYAzQ6NUtnMalO90SaMDZY+qbvBv8f83t4jAT3yEumFLo8fctBPQ7yCg2oSilv4otgDl8sMxtGXDPDe9BGx/v7TP6F8k/oqR8jSXXp6buiUN8m9ze3tLW4fqfPRqfIeI/oSJlB3hZX8iqPIkdwQYAM68LCg7AjXDAAAAAElFTkSuQmCC");
}
.icon-soso {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDMTc2OThGN0RDRTExRTlCREQ3Q0JDQkI1RUIyMTNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDMTc2OTkwN0RDRTExRTlCREQ3Q0JDQkI1RUIyMTNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0MxNzY5OEQ3RENFMTFFOUJERDdDQkNCQjVFQjIxM0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0MxNzY5OEU3RENFMTFFOUJERDdDQkNCQjVFQjIxM0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5B0ciZAAAGA0lEQVR42txb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");
}
</style>

