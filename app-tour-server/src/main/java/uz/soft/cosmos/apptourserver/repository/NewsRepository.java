package uz.soft.cosmos.apptourserver.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import uz.soft.cosmos.apptourserver.entity.News;
import uz.soft.cosmos.apptourserver.projection.CustomNews;

import java.util.UUID;

public interface NewsRepository extends JpaRepository<News, UUID> {
    Page<CustomNews> findAllByOrderByCreatedAtDesc(Pageable pageable);
}