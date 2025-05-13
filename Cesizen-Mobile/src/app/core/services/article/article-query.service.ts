import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { from, Observable, map } from 'rxjs';
import { Article } from '@models/article/article';
import { environment } from '@environments/environment';
import { PaginationData } from '@models/pagination/pagination-data.interface';
import { ArticleDto } from '@models/article/article-dto';
import { ArticleMinimumDto } from '@models/article/article-minimum-dto';

@Injectable({
  providedIn: 'root'
})
export class ArticleQueryService {
  private apiUrlLast = environment.articleGetLastUrl;
  private apiUrlIndex = environment.articleIndexUrl;
  private readonly apiUrlByCategory = environment.articleGetByCategoryUrl;
  private readonly apiUrlDetails = environment.articleQueryUrl;
 
  getAllArticles(
    pageNumber: number,
    pageSize: number
  ): Observable<PaginationData<ArticleMinimumDto>> {
    const url = this.apiUrlIndex;
    const params = {
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString()
    };

    //Use from() to convert the Promise returned by Capacitor HTTP to an Observable so your Angular code stays consistent.
    return from(
      CapacitorHttp.get({
        url, params
      })
    ).pipe(
      map(response => {
        const value = response.data.value;
        return {
          data: value.data as ArticleMinimumDto[],
          pageNumber: value.pageNumber,
          pageSize: value.pageSize,
          totalCount: value.totalCount
        };
      })
    );
  }


  getLimitArticles(amount: number, limit = 4): Observable<Article[]> {
    const url = this.apiUrlLast;
    const params = { amount: amount.toString() };

    return from(
      CapacitorHttp.get({ url, params })
    ).pipe(
      map((response) => {
        const articles = response.data.value as Article[];
        return articles
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, limit);
      })
    );
  }

  getArticleDetails(id: number): Observable<Article> {
    const url = `${this.apiUrlDetails}/${id}/details`;

    return from(CapacitorHttp.get({ url })).pipe(
      map(response => response.data.value as Article)
    );
  }

  article: Article | null = null; // Define a property to store the article data

  DisplayConsole(id: number): void {
    const url = `${this.apiUrlDetails}/${id}/details`;

    from(CapacitorHttp.get({ url })).subscribe({
      next: (response) => {
        this.article = response.data as Article; // Store the API response in the component property
        console.log(response); // Optional: Log the data for debugging
    },
      error: (error) => {
        console.error('Error fetching article:', error); // Handle errors
      }
    });
  }

  getArticlesByCategory(
    categoryId: number,
    pageNumber: number,
    pageSize: number
  ): Observable<PaginationData<ArticleDto>> {
    const url = this.apiUrlByCategory;
    const params = {
      categoryId: categoryId.toString(),
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString()
    };

    return from(CapacitorHttp.get({ url, params })).pipe(
      map(response => {
        const value = response.data.value;
        return {
          data: value.data as ArticleDto[],
          pageNumber: value.pageNumber,
          pageSize: value.pageSize,
          totalCount: value.totalCount
        };
      })
    );
  }
}
