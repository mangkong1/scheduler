<%@ page language='java' contentType='text/html' pageEncoding='utf-8' %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <main>
      <section>
        <article>
          <img style="width:100px" src="../img/calender_logo.png" alt="로고" />
          <input type="submit" value="로그아웃" />
          <button href="">마이페이지</button>
          
          <button id='write_btn' href="">글쓰기</button>
        </article>
        <article>
          <button href="">이전연도</button>
          <button href="">다음연도</button>
          <h3>2024년</h3>
          <select>
            <%-- js createElement로 나중에 바꿔보기 --%>
            <option>1월</option>
            <option>2월</option>
            <option>3월</option>
            <option>4월</option>
            <option>5월</option>
            <option>6월</option>
            <option>7월</option>
            <option>8월</option>
            <option>9월</option>
            <option>10월</option>
            <option>11월</option>
            <option>12월</option>
          </select>
        </article>
        <article>
          <%-- 요일개념없이 진행하기로 했으니 단순히 표로 해도되나?
          이것도 js createElement 생각해보기--%>
          <table>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
            </tr>
          </table>
        </article>
      </section>
    </main>
    <script src="../event/scheduler.js"></script>
  </body>
</html>
