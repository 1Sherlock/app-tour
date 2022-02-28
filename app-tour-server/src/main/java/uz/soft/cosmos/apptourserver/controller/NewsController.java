package uz.soft.cosmos.apptourserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.soft.cosmos.apptourserver.entity.News;
import uz.soft.cosmos.apptourserver.payload.ApiResponse;
import uz.soft.cosmos.apptourserver.payload.ReqNews;
import uz.soft.cosmos.apptourserver.repository.AttachmentRepository;
import uz.soft.cosmos.apptourserver.repository.NewsRepository;

import java.util.UUID;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    NewsRepository newsRepository;

    @Autowired
    AttachmentRepository attachmentRepository;

    @PostMapping("/save")
    public HttpEntity<?> save(@RequestBody ReqNews reqNews){
        try {
            News news;

            if (reqNews.getId() != null){
                news = newsRepository.getById(reqNews.getId());
            } else {
                news = new News();
            }

            news.setTitleUz(reqNews.getTitleUz());
            news.setTitleRu(reqNews.getTitleRu());
            news.setTitleEn(reqNews.getTitleEn());

            news.setShortDescEn(reqNews.getShortDescEn());
            news.setShortDescRu(reqNews.getShortDescRu());
            news.setShortDescUz(reqNews.getShortDescUz());

            news.setDescriptionEn(reqNews.getDescriptionEn());
            news.setDescriptionRu(reqNews.getDescriptionRu());
            news.setDescriptionUz(reqNews.getDescriptionUz());

            news.setUrl(reqNews.getUrl());

            if (reqNews.getPhoto() != null)
                news.setPhoto(attachmentRepository.getById(reqNews.getPhoto()));

            newsRepository.save(news);

            if (reqNews.getId() != null){
                return ResponseEntity.ok(new ApiResponse(true, "Saved"));
            } else {
                return ResponseEntity.ok(new ApiResponse(true, "Updated"));
            }

        } catch (Exception e){
            return ResponseEntity.ok(new ApiResponse(false, e.getLocalizedMessage()));
        }
    }

    @GetMapping
    public HttpEntity<?> getAll(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size) {
        return ResponseEntity.ok(new ApiResponse(true, "", newsRepository.findAllByOrderByCreatedAtDesc(PageRequest.of(page, size))));
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteOne(@PathVariable UUID id){
        try {
            newsRepository.deleteById(id);
            return ResponseEntity.ok(new ApiResponse(true, "Deleted"));
        }catch (Exception e){
            return ResponseEntity.ok(new ApiResponse(false, e.getLocalizedMessage()));
        }
    }
}
