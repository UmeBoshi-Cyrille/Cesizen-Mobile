import { Injectable } from '@angular/core';
import { Category } from '@models/category/category';
import { from, map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { CategoryDto } from '@models/category/category-dto';
import { PaginationData } from '@models/pagination/pagination-data.interface';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryQueryService {
  private apiUrlIndex = environment.categoryIndexUrl;

  getAllCategories(): Observable<Category[]> {
    const url = this.apiUrlIndex;

    return from(CapacitorHttp.get({ url })).pipe(
      map(response => {
        console.log('API Response:', response);
        return response.data.value.data as Category[];
      })
    );
  }

  getCategories(
    pageNumber: number,
    pageSize: number
  ): Observable<PaginationData<CategoryDto>> {
    const url = this.apiUrlIndex;
    const params = {
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString()
    };

    return from(CapacitorHttp.get({ url, params })).pipe(
      map(response => {
        const value = response.data.value;
        return {
          data: value.data as CategoryDto[],
          pageNumber: value.pageNumber,
          pageSize: value.pageSize,
          totalCount: value.totalCount
        }
      })
    );
  }

}

